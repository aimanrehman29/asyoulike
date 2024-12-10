import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'default',
  title: 'Your Project Title',
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  plugins: [deskTool()],
});
