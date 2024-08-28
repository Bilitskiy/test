import {AnimatePresence} from "framer-motion";

import { Sidebar, Overlay } from './SidebarWidget.elements';
import { sidebarAnimationConfig, overlayAnimationConfig } from './animationsConfig';
import { SidebarWidgetProps } from "@/components/widgets/sidebar/SidebarWidget.types";
import {useCheckMobileScreen} from "@hooks/useCheckMobileScreen";
import {useEffect} from "react";

export const SidebarWidget = ({ isOpened, setIsOpened }: SidebarWidgetProps) => {

    const isMobile = useCheckMobileScreen();

    useEffect(() => {
        setIsOpened(!isMobile)
    }, [isMobile]);

    return <AnimatePresence>
        {isOpened && <Sidebar
            key={'sidebar'}
            animate={sidebarAnimationConfig.animate}
            exit={sidebarAnimationConfig.exit}
            initial={sidebarAnimationConfig.initial}>
        </Sidebar>}
        {isOpened && isMobile && <Overlay
            key={'overlay'}
            onClick={() => setIsOpened(false)}
            animate={overlayAnimationConfig.animate}
            exit={overlayAnimationConfig.exit}
            initial={overlayAnimationConfig.initial}>
        </Overlay>}
    </AnimatePresence>
}