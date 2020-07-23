export interface Checklist {
    id: String;
    title: String;
    items: ChecklistItem[];
}

export interface ChecklistItem {
    title: String;
    checked: Boolean;
}