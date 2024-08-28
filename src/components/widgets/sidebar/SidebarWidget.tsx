import { Root } from './SidebarWidget.elements';

const sidebarVariants = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'linear',
            duration: 0.1,
            x: { duration: 0.1 },
        },
    },
    initial: {
        opacity: 1,
        zIndex: 2,
        x: '-100%',
        transition: {
            ease: 'linear',
            duration: 0.1,
        },
    },
    exit: {
        opacity: 1,
        x: '-100%',
        transition: {
            ease: 'linear',
            duration: 0.1,
        },
    },
};

export const SidebarWidget = () => {
    return  <Root>

    </Root>
}