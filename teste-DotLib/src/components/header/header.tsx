import * as Switch from '@radix-ui/react-switch'

import { Sun, Moon } from 'lucide-react'

import './header.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header className={`header-${theme}`}>
      <div className="container-header">
        <h1>
          <span className="span">Dot</span>.Lib
        </h1>

        <div className="theme">
          <Switch.Root
            className="SwitchRoot"
            id="airplane-mode"
            checked={theme === 'dark'}
            onCheckedChange={(event) => setTheme(event ? 'dark' : 'light')}
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
          {theme === 'light' ? (
            <Sun size={20} className="icon-light" />
          ) : (
            <Moon size={20} className="icon-dark" />
          )}
        </div>
      </div>
    </header>
  )
}
