'use client'

import { AppNavigation } from '@features'
import { ThemeSwitcher, LocaleSwitcher } from '@shared'

import { Root } from './MainLayout.elements'
import { MainLayoutProps } from './MainLayout.types'

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Root>
            {children}
        </Root>
    )
}
