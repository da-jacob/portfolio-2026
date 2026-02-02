export default function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            function getTheme() {
              const cookie = document.cookie.split(';').find(c => c.trim().startsWith('theme='));
              if (cookie) {
                return cookie.split('=')[1];
              }
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              return prefersDark ? 'dark' : 'light';
            }
            
            const theme = getTheme();
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            } else {
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
            }
          })();
        `,
            }}
        />
    );
}
