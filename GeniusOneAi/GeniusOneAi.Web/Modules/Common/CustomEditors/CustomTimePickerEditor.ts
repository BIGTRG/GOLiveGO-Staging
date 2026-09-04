//namespace GeniusOneAi.CustomEditors {
//    import * as moment from 'moment'
//    @Serenity.Decorators.element("<div/>")
//    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue, Serenity.IGetEditValue])
//    export class CustomTimePickerEditor extends Serenity.Widget<ICustomTimePickerEditorOptions>
//    implements Serenity.ISetEditValue, Serenity.IGetEditValue {
//        getEditValue(property: Serenity.PropertyItem, target): void {
//            let pValue = this.element.find(".custom-timepicker-editor").val();
//            target[property.name] = moment(pValue, 'LTS').format('HH:mm:ss');
//        }

//        private value: string;

//        constructor(container: JQuery, options: ICustomTimePickerEditorOptions) {
//            super(container, options);

//            // hide the caption label for this editor if in a form. ugly hack
//            if (this.options.hideLabel)
//                this.element.closest('.field').find('.caption').hide();

//            let elementFormat =
//                '<div class="input-group bootstrap-timepicker timepicker">' +
//                    //'   <div class="input-group-addon">' +
//                    //'       <input type="checkbox" class="chkEnable">' +
//                    //'   </div>' +
//                    '   <input type="text" class="form-control custom-timepicker-editor">' +
//                    //'   <div class="input-group-addon set-time-now">' +
//                    //'       <i class="fa fa-clock-o"></i>' +
//                    //'   </div>' +
//                    //'   <div class="input-group-addon reset-time">' +
//                    //'       <i class="fa fa-undo"></i>' +
//                    //'   </div>' +
//                    '</div>';

//            this.element.html(elementFormat);

//            if (this.options.containerClass) {
//                this.element.addClass(this.options.containerClass);
//            }

//            if (this.options.enable) {
//                this.element.find(".chkEnable").attr("checked", "checked");
//            } else {
//                this.element.find(".chkEnable").removeAttr("checked");
//            }

//            var timePickerElement = this.element.find(".custom-timepicker-editor");
//            timePickerElement.timepicker();
//        }

//        //setTimeNow(): void {
//        //    console.log("1");
//        //    element.timepicker('setTime', moment().format('LTS'));
//        //}

//        //resetTime(): void{
//        //    console.log("2");
//        //    element.timepicker('setTime', moment(this.value, 'HH:mm:ss').format('LTS'));
//        //}

//        public setEditValue(source: any, property: Serenity.PropertyItem) {
//            let timePickerElement = this.element.find(".custom-timepicker-editor");

//            if (!timePickerElement.hasClass(property.name)) {
//                timePickerElement.addClass(property.name);
//            }

//            let propValue = source[property.name];

//            if (Q.isEmptyOrNull(propValue)) {
//                this.value = "00:00:00";
//            } else {
//                this.value = propValue;
//            }
//            //console.log(this.value);
//            timePickerElement.timepicker('setTime', moment(this.value, 'HH:mm:ss').format('LTS'));
//        }
//    }

//    export interface ICustomTimePickerEditorOptions {
//        hideLabel: boolean;
//        containerClass: string;
//        enable: boolean;
//        // declare TimePicker options here
//    }
//}