import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially = () => {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints = () => {
        this.itemsToReveal.each((_, current) => {
            const currentItem = current;
            const offset = this.offsetPercentage;
            new Waypoint({
                element: currentItem,
                handler: () => {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: offset
            });
        });
    }
}

export default RevealOnScroll;