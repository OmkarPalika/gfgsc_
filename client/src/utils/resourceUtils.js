export const filterResourcesByTag = (resources, tag) => {
    return resources.filter(resource => resource.tags.includes(tag));
};

export const sortResourcesByDate = (resources) => {
    return resources.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const searchResources = (resources, searchTerm) => {
    return resources.filter(resource => resource.title.toLowerCase().includes(searchTerm.toLowerCase()));
};
