import * as Switch from '@radix-ui/react-switch'

import './header.scss'

export function Header() {
  return (
    <header className="header">
      <h1>
        <span className="span">Dot</span>.Lib
      </h1>

      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </header>
  )
}
