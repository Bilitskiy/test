'use client'

import { Root, MainContainer, Content } from './MainLayout.elements'
import { MainLayoutProps } from './MainLayout.types'
import {HeaderWidget, SidebarWidget} from "@/components/widgets";

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Root>
            <SidebarWidget />
            <MainContainer>
                <HeaderWidget />
                    <Content>
                        {children}
                    </Content>
            </MainContainer>
        </Root>
    )
}
