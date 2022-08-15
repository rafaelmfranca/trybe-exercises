import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type TLens = z.infer<typeof lensZodSchema>;

export default TLens;
export { lensZodSchema };
