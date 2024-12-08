/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
theme: {
  extend: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      }
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': 'var(--text)',
          '--tw-prose-headings': 'var(--text)',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 'normal',
            marginBottom: '0.25em',
          },
        },
      },
    }),
    
  }
},
plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],


};



// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx,js,jsx}',
//     './components/**/*.{ts,tsx,js,jsx}',
//     './app/**/*.{ts,tsx,js,jsx}',
//     './src/**/*.{ts,tsx,js,jsx}',
//   ],
//   darkMode: ['selector', '[data-theme="dark"]'],
//   plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
//   prefix: '',
//   safelist: [
//     'lg:col-span-4',
//     'lg:col-span-6',
//     'lg:col-span-8',
//     'lg:col-span-12',
//     'border-border',
//     'bg-card',
//     'border-error',
//     'bg-error/30',
//     'border-success',
//     'bg-success/30',
//     'border-warning',
//     'bg-warning/30',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         '2xl': '2rem',
//         DEFAULT: '1rem',
//         lg: '2rem',
//         md: '2rem',
//         sm: '1rem',
//         xl: '2rem',
//       },
//       screens: {
//         '2xl': '86rem',
//         lg: '64rem',
//         md: '48rem',
//         sm: '40rem',
//         xl: '80rem',
//       },
//     },
//     extend: {
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       colors: {
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         background: 'hsl(var(--background))',
//         border: 'hsla(var(--border))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         foreground: 'hsl(var(--foreground))',
//         input: 'hsl(var(--input))',
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         ring: 'hsl(var(--ring))',
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         success: 'hsl(var(--success))',
//         error: 'hsl(var(--error))',
//         warning: 'hsl(var(--warning))',
//       },
//       fontFamily: {
//         mono: ['var(--font-geist-mono)'],
//         sans: ['var(--font-geist-sans)'],
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//       },
//       typography: ({ theme }) => ({
//         DEFAULT: {
//           css: {
//             '--tw-prose-body': 'var(--text)',
//             '--tw-prose-headings': 'var(--text)',
//             h1: {
//               fontSize: '3.5rem',
//               fontWeight: 'normal',
//               marginBottom: '0.25em',
//             },
//           },
//         },
//       }),
//     },
//   },
// }