import $ from "jquery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events = () => {
        // clicking the open modal button
        this.openModalButton.click(this.openModal);

        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal);

        // pushes the escape key
        $(document).keyup(this.keyPressHandler);
    }

    keyPressHandler = (e) => {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal = () => {
        this.modal.addClass("modal--is-visible");
    }

    closeModal = () => {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;