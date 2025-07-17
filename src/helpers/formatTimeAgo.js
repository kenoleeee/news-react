export const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffSeconds = Math.ceil(diffTime / 1000);

    if (diffDays > 0) {
        return `${diffDays} days ago`;
    } else if (diffHours > 0) {
        return `${diffHours} hours ago`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes} minutes ago`;
    } else if (diffSeconds > 0) {
        return `${diffSeconds} seconds ago`;
    }
    return 'just now';
}