export function formatCategoryTitle(title) {
    const splitedName = title.split(' ')
    const lastElementIndex = splitedName.length - 1;
    const markup = splitedName.map((word, index) => {
        if (lastElementIndex === index) {
            return `<span class="violet">${word}</span>`
        }
        return word
    }).join(' ')
    return markup
}

