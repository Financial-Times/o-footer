export default Footer;
declare class Footer {
    static get collapsibleBreakpoints(): string[];
    static shouldCollapse(breakpoint: any): boolean;
    static init(rootEl: any): Footer;
    constructor(footerEl: any);
    footerEl: any;
    setup(): void;
    _toggles: any[];
    destroy(): void;
}
