import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    additionalData: `@use 'settings/colors' as *; @use 'settings/variables' as *; @use 'settings/mixins' as *;`,
  },
};

export default nextConfig;
