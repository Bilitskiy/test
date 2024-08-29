import {useTheme} from "next-themes";

import { HeaderContainer, BurgerButton } from './HeaderWidget.elements';
import {HeaderWidgetProps} from "@/components/widgets/header/HeaderWidget.types";

export const HeaderWidget = ({ triggerSidebar, isTriggered }: HeaderWidgetProps) => {
    const theme = useTheme();
    const isLightTheme = theme.theme === 'light';

    return <HeaderContainer isLightTheme={isLightTheme}>
        <BurgerButton isLightTheme={isLightTheme} isTriggered={isTriggered} onClick={triggerSidebar}/>
    </HeaderContainer>
}