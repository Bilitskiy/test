import {useTheme} from "next-themes";

import { HeaderContainer, BurgerButton } from './HeaderWidget.elements';
import {HeaderWidgetProps} from "@/components/widgets/header/HeaderWidget.types";

export const HeaderWidget = ({ triggerSidebar, isTriggered }: HeaderWidgetProps) => {
    const theme = useTheme();
    const isDarkTheme = theme.theme === 'dark';

    return <HeaderContainer isDarkTheme={isDarkTheme}>
        <BurgerButton isDarkTheme={isDarkTheme} isTriggered={isTriggered} onClick={triggerSidebar}/>
    </HeaderContainer>
}