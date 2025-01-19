import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Toolbar } from "@mui/material";
import HeaderBar from "@/components/AppBar";
import ReduxProvider from "@/store/reduxProvider";
import AppWarpper from "@/components/AppWarpper";

export const metadata = {
  title: "Search Pokemons",
  description: "Pokemons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <ReduxProvider>
                <AppWarpper>
                    <CssBaseline />
                    <header>
                      <HeaderBar />
                    </header>
                    <main className={'pt-20'}>
                      <Toolbar />
                      {children}
                    </main>
                </AppWarpper>
              </ReduxProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
