import {Root, BurgerButton} from './HeaderWidget.elements';
import {HeaderWidgetProps} from "@/components/widgets/header/HeaderWidget.types";

export const HeaderWidget = ({ triggerSidebar, isTriggered }: HeaderWidgetProps) => {
    return <Root>
        <BurgerButton isTriggered={isTriggered} onClick={triggerSidebar}/>
    </Root>
}