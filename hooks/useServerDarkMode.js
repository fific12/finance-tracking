import { cookies } from 'next/headers'

const useServerDarkMode = async (defaultTheme = 'dark') => {
  const cookieStore = await cookies()
  return cookieStore.get('theme')?.value ?? defaultTheme
}

export default useServerDarkMode

// import { cookies } from "next/headers";

// const useServerDarkMode = async (defaultTheme = "dark") => {
//   const cookieStore = cookies();
//   return cookieStore.get("theme")?.value ?? defaultTheme;
// };

// export default useServerDarkMode;
