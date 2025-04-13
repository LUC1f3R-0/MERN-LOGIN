// Import the necessary functions from the vite package
// defineConfig: Helper function that provides type hints for the configuration
// loadEnv: Utility to load environment variables from .env files
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// Import the React plugin which enables React support in Vite
// This plugin handles JSX transformation and provides React-specific optimizations
import react from '@vitejs/plugin-react'

// The main configuration export
// We use defineConfig with a function parameter (instead of an object)
// This function receives a context object with properties like 'mode'
// 'mode' represents the current environment (development, production, etc.)
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  // Parameters explained:
  // - mode: The current environment mode (development, production, etc.)
  // - process.cwd(): The current working directory (your project root)
  //   process is a global Node.js object and cwd() gets the current directory
  // - '': The prefix for env variables to load. Empty string means load all variables
  //   (By default, only variables prefixed with VITE_ are loaded)
  const env = loadEnv(mode, process.cwd(), '')

  // Return the configuration object
  return {
    // Add plugins to extend Vite's functionality
    // Here we only add the React plugin to enable JSX support and React-specific features
    plugins: [tailwindcss(), react()],

    // Configure the development server
    server: {
      // Set the host address from the environment variable
      // This is the network interface that Vite will listen on
      host: (env.VITE_FRONTEND_HOST),

      // Set the port from the environment variable
      // parseInt converts the string from the .env file to a number
      // This is the TCP port that Vite will use for the development server
      port: parseInt(env.VITE_FRONTEND_PORT),
    },
  }
})