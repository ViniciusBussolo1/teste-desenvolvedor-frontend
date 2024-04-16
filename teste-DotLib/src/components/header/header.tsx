import * as Switch from '@radix-ui/react-switch'

import { useTheme } from '../../hooks/useTheme'

import { Sun, Moon } from 'lucide-react'
import './header.scss'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className={`header ${theme}`}>
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
    </header>
  )
}
