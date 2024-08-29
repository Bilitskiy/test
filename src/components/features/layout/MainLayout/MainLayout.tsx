'use client'

import { Root, MainContainer, Content } from './MainLayout.elements'
import { MainLayoutProps } from './MainLayout.types'
import {HeaderWidget, SidebarWidget} from "@/components/features";
import {useState} from "react";

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);

    const setIsOpened = (opened: boolean) => {
        setSidebarOpened(opened);
    }

    const triggerSidebar = () => {
        setSidebarOpened(prev => !prev);
    }

    return (
        <Root>
            <SidebarWidget isOpened={sidebarOpened} setIsOpened={setIsOpened}/>
            <MainContainer>
                <HeaderWidget isTriggered={sidebarOpened} triggerSidebar={triggerSidebar}/>
                    <Content>
                        {children}
                    </Content>
            </MainContainer>
        </Root>
    )
}
