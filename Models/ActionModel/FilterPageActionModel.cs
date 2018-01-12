namespace HuRe.Models.ActionModel
{
    public class FilterPageActionModel
    {
        public int CurrentPage { get; set; }
        public int NumberItemPage { get; set; }
        public int IsActivated { get; set; }
        public int RoleId { get; set; }
        public string KeySearch { get; set; }
    }
}