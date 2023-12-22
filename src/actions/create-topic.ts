'use server';

import { z } from 'zod';
import { auth } from '@/auth';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Numst be lowercase letters or dashes without spaces',
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; // general errors on the form
  };
}
export async function createTopic(
  _: CreateTopicFormState, // the form state to be passed between form and server action
  formData: FormData
): Promise<CreateTopicFormState> {
  // run validation
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['you must be signed in to do this.'],
      },
    };
  }
  return {
    errors: {},
  };
}
