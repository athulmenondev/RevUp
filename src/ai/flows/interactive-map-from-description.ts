// Interactive Map Generation Flow
'use server';

/**
 * @fileOverview Generates an interactive map URL from a textual description of a location.
 *
 * - generateInteractiveMap - A function that generates an interactive map URL.
 * - InteractiveMapInput - The input type for the generateInteractiveMap function.
 * - InteractiveMapOutput - The return type for the generateInteractiveMap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveMapInputSchema = z.object({
  locationDescription: z
    .string()
    .describe('A textual description of the event venue location.'),
});
export type InteractiveMapInput = z.infer<typeof InteractiveMapInputSchema>;

const InteractiveMapOutputSchema = z.object({
  mapUrl: z
    .string()
    .describe('An interactive map URL for the specified location.'),
});
export type InteractiveMapOutput = z.infer<typeof InteractiveMapOutputSchema>;

export async function generateInteractiveMap(
  input: InteractiveMapInput
): Promise<InteractiveMapOutput> {
  return interactiveMapFlow(input);
}

const generateMapUrl = ai.defineTool({
  name: 'generateMapUrl',
  description: 'Generates a URL for an interactive map based on a location description.',
  inputSchema: z.object({
    locationDescription: z
      .string()
      .describe('A detailed textual description of the location.'),
  }),
  outputSchema: z.string().describe('The URL of the interactive map.'),
},
async (input) => {
  // Placeholder implementation - replace with actual map URL generation logic
  // such as calling Google Maps API or other mapping service.
  // This example simply returns a placeholder URL.
  const query = encodeURIComponent(input.locationDescription);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
});

const interactiveMapPrompt = ai.definePrompt({
  name: 'interactiveMapPrompt',
  tools: [generateMapUrl],
  input: {schema: InteractiveMapInputSchema},
  output: {schema: InteractiveMapOutputSchema},
  prompt: `Based on the location description provided, generate an interactive map URL using the available tool.

Location Description: {{{locationDescription}}}

Make sure to call the tool and respond with the map URL.`,
});

const interactiveMapFlow = ai.defineFlow(
  {
    name: 'interactiveMapFlow',
    inputSchema: InteractiveMapInputSchema,
    outputSchema: InteractiveMapOutputSchema,
  },
  async input => {
    const {output} = await interactiveMapPrompt(input);
    return {
      mapUrl: output?.mapUrl ?? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzAwLjAiTiA3MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
    };
  }
);
