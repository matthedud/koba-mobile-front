
export const deselectParent = (event) => {
    if (event?.parent?.selected === true) {
        event.parent.setSelected(false)
        deselectParent(event.parent)
    }
}

export const selectChildren = (event) => {
    if (event?.data?.nature==='groupe') {
        event.childrenAfterGroup.forEach(children => {
            children.setSelected(event.selected)
            selectChildren(children)
        })
    }
}

export const onRowSelected = (event) => {
    selectChildren(event.node)
    if (!event.node.selected) deselectParent(event.node)
}
