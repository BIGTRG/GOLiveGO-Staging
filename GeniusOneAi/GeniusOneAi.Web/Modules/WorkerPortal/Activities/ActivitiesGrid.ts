
namespace GeniusOneAi.WorkerPortal
{
    import fld = ActivitiesRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey() { return 'WorkerPortal.Activities'; }
        protected getIdProperty() { return ActivitiesRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesRow.localTextPrefix; }
        protected getService() { return ActivitiesService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Activity Manager";
        }
        protected getAddButtonCaption(): string { return "Log Activity"; }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
          
            columns.splice(0,0,{
                field: 'Edit Activity',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Activity"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View/Edit Notes',
                name: '',
                format: ctx => '<a class="inline-action edit-note-row" title="View/Edit Notes"><i class="fa fa-file-text-o text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(2, 0, {
                field: 'Reviewer Comments',
                name: '',
                format: ctx => '<a class="inline-action view-comments-row" title="Reviewer Comments"><i class="fa fa-list text-orange"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(3, 0, {
                field: 'Delete',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="Delete Activity"><i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
           return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            var q = Q.parseQueryString();
            if (q["NoteStatus"])
            {
                buttons.push({
                    title: 'Return to Dashboard',
                    cssClass: 'send-button',
                    onClick: () =>
                    {
                        window.location.href = '/WorkerPortal/MyDashboard/Index/WorkerPortal/MyDashboard'

                    }
                });
            }
            return buttons;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
            if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ActivityId); 
                }
            if (target.hasClass('view-comments-row')) {

                if (!this.onViewSubmit()) {
                    return;
                }
                var dlg = new GeniusOneAi.WorkerPortal.ActivitiesLogDialog(item.ActivityId);
                dlg.dialogOpen();
            }
            if (target.hasClass('edit-note-row')) {

                if (!this.onViewSubmit()) {
                    return;
                }
                location.replace("/WorkerPortal/ProgramNotes/"+item.ActivityId);
            }
            if (target.hasClass('delete-row')) {

                Q.confirm(
                    "Would you like to delete this record?",
                    () => {
                        WorkerPortal.ActivitiesService.Delete({ EntityId: item.ActivityId},
                            response => {
                                Q.notifySuccess("Record Deleted!",
                                    "Record Deletion Alert",
                                    {
                                        progressBar: true,
                                        positionClass: "toast-top-center",
                                        showDuration: 1000,
                                        hideDuration: 1000,
                                        timeOut: 5000,
                                        closeButton: true
                                    });
                            }, { async: false });
                        slf.refresh();
                    },
                    {
                        onNo: () => {
                            Q.notifyError("Operation cancelled!");
                        },
                        onCancel: () => {

                        }
                    });


                }
            }

        }
        protected getItemCssClass(item: ActivitiesRow, index: number): string {
            let klass: string = "";
            if (item.Activity === "Patient" && item.Status === "Notes Saved" && item.ProgramNoteFileName !== "") {
                klass += " program-delete-disabled";
                return Q.trimToNull(klass);
            }
            if (item.Activity !== "Patient" && item.Status !== "Processed") {
                klass += " program-note-disabled";
                return Q.trimToNull(klass);
            }
            if (item.Status === "Processed" || item.Status === "Approved" || item.Status === "Processing" || item.Status === "Paid") {
                klass += " program-note-disabled";
                klass += " program-delete-disabled";
                klass += " program-edit-disabled";
                return Q.trimToNull(klass);
            }
            if (item.Activity === "Patient" && (item.Status === "Rejected" || item.Status === "Re-Submitted")) {
                klass += " program-delete-disabled";
                return Q.trimToNull(klass);
            }
      
            
            return Q.trimToNull(klass);
        }
        protected getQuickFilters()
        {
            var flt = super.getQuickFilters();
            var q = Q.parseQueryString();

            if (q["NoteStatus"])
            {
                var NoteStatus = Q.tryFirst(flt, x => x.field == "Status");
                //
                NoteStatus.init = e => { this.findQuickFilter(GeniusOneAi.CustomEditors.TimesheetStatusEditor, fld.Status).value = q["NoteStatus"]; };


                NoteStatus.handler = h =>
                {
                    if (h.active)
                    {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.Status], 'like', '%' + q["NoteStatus"] + '%']);
                    }
                };

                return flt;
            }
            return flt
        }
   
    }
}