import * as React from "react";

import { MenuItem, AssistiveTouchMenuState, AssitiveTouchPosition } from "./types";

interface AssistiveTouchMenuProps {
    menuItems: MenuItem[];
    open: boolean;
    position: AssitiveTouchPosition;
    onClickOverlay: (e: any) => void;
}

export class AssistiveTouchMenu extends React.Component<AssistiveTouchMenuProps, AssistiveTouchMenuState> {
    private domRef: React.RefObject<HTMLDivElement>;
    constructor(props: AssistiveTouchMenuProps, state: AssistiveTouchMenuState) {
        super(props, state);
        this.domRef = React.createRef();
        this.state = {
            activeMenu: null,
            open: false,
        };
    }

    private handleClick = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
    }

    private setMenuPosition() {
        let pos, scale;
        if (!this.props.open && this.domRef.current !== null) {
            const bbox = this.domRef.current.getBoundingClientRect();
            scale = 0;
            pos = [this.props.position.left - (bbox.left + bbox.width / 2) + 25, this.props.position.top - (bbox.top + bbox.height / 2) + 25];
        }
        else {
            scale = 1;
            pos = [0, 0];
        }
        return {
            transform: `translate(${pos[0]}px, ${pos[1]}px) scale(${scale})`
        }
    }


    private options = (option) => {
        console.log("option clicked");
        switch(option) {
            case 'Search':
                return <div>SEARCH...</div>
            case 'Involve':
                return <div>INVOLVE...</div>
            case 'Support':
                return <div>SUPPORT...</div>
            case 'Measure':
                return <div>MEASURE...</div>
            case 'Tour':
                return <div>TOUR...</div>
            case 'Feedback':
                return <div>FEEDBACK...</div>
        }
    }

    private getMenuItems() {
        const r = 80;
        const l = this.props.menuItems.length;
        return this.props.menuItems.map((menuItem, i) => {
            const angle = 360 * (i) / l;
            const x = Math.round(r * Math.cos(angle * Math.PI / 180) * 100) / 100;
            const y = Math.round(-r * Math.sin(angle * Math.PI / 180) * 100) / 100;
            const _style = {
                transform: `translate(${5}px, ${55}px)`,
                cursor: 'pointer'
            }
            return (
            <div className='assistivetouch-menu-content.open' style={_style} key={i} onClick={() => this.options(menuItem.label)} data-testid={`${menuItem.label}-id`}>
                {menuItem.icon}
                <label style={{color: "white", opacity: 0.5}}>{menuItem.label}</label>
                <div className='icon-space'></div>
            </div>
            )
        });
    }

    render() {
        return (
            <div className='assistivetouch-menu-overlay' onClick={this.props.onClickOverlay} onTouchStart={this.props.onClickOverlay} >
                <div ref={this.domRef} style={this.setMenuPosition()} className={`assistivetouch-menu-content ${this.props.open ? 'open' : ''}`} onClick={this.handleClick} onTouchStart={this.handleClick}>
                    {this.getMenuItems()}
                </div>
            </div >
        )
    }
}