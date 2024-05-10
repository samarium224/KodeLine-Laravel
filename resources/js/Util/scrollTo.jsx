export const scrollTo = (id, padding = 0) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - padding;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
};
