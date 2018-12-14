import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTrigger = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints = () => {
        this.lazyImages.ready(() => {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling = () => {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint = () => {
        const headerTrigger = this.headerTrigger[0];
        const siteHeader = this.siteHeader;

        new Waypoint({
            element: headerTrigger,
            handler: (direction) => {
                if (direction == "down") {
                    siteHeader.addClass("site-header--dark");
                } else {
                    siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints = () => {
        const headerLinks = this.headerLinks;
        this.pageSections.each((_, element) => {
            const currentPageSection = element;
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == "down") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == "up") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;