﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Yuehkap5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ поставщику.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказПост CustomAttributes)

    // *** End programmer edit section *** (ЗаказПост CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ поставщику")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказПостE", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'",
            "СостояниеОплаты as \'Состояние оплаты\'"})]
    [AssociatedDetailViewAttribute("ЗаказПостE", "Заказ", "ТЧЗаказE", true, "", "Заказ", true, new string[] {
            ""})]
    [View("ЗаказПостL", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'",
            "СостояниеОплаты as \'Состояние оплаты\'"})]
    [View("ЗаказПоставщикуE", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'"})]
    [AssociatedDetailViewAttribute("ЗаказПоставщикуE", "Заказ", "ТЧЗаказE", true, "", "Заказ", true, new string[] {
            ""})]
    [View("ЗаказПоставщикуL", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'"})]
    public class ЗаказПост : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаОкончания;
        
        private int fСуммаДокумента;
        
        private System.DateTime fДатаНачала;
        
        private bool fСуммаВклНДС;
        
        private IIS.Yuehkap5.СостОплаты fСостояниеОплаты;
        
        private IIS.Yuehkap5.СостПоставок fСостОтгрузки;
        
        private IIS.Yuehkap5.Склады fСклады;
        
        private IIS.Yuehkap5.Организации fОрганизации;
        
        private IIS.Yuehkap5.Контрагенты fКонтрагенты;
        
        private IIS.Yuehkap5.DetailArrayOfТЧЗаказ fЗаказ;
        
        // *** Start programmer edit section *** (ЗаказПост CustomMembers)

        // *** End programmer edit section *** (ЗаказПост CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаНачала Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.ДатаОкончания CustomAttributes)
        public virtual System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get start)
                System.DateTime result = this.fДатаОкончания;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Get end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set start)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set start)
                this.fДатаОкончания = value;
                // *** Start programmer edit section *** (ЗаказПост.ДатаОкончания Set end)

                // *** End programmer edit section *** (ЗаказПост.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// СостОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостОтгрузки CustomAttributes)
        public virtual IIS.Yuehkap5.СостПоставок СостОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get start)
                IIS.Yuehkap5.СостПоставок result = this.fСостОтгрузки;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Get end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set start)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set start)
                this.fСостОтгрузки = value;
                // *** Start programmer edit section *** (ЗаказПост.СостОтгрузки Set end)

                // *** End programmer edit section *** (ЗаказПост.СостОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// СостояниеОплаты.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты CustomAttributes)
        public virtual IIS.Yuehkap5.СостОплаты СостояниеОплаты
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get start)
                IIS.Yuehkap5.СостОплаты result = this.fСостояниеОплаты;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set start)
                this.fСостояниеОплаты = value;
                // *** Start programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)

                // *** End programmer edit section *** (ЗаказПост.СостояниеОплаты Set end)
            }
        }
        
        /// <summary>
        /// СуммаВклНДС.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС CustomAttributes)
        public virtual bool СуммаВклНДС
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get start)
                bool result = this.fСуммаВклНДС;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set start)
                this.fСуммаВклНДС = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаВклНДС Set end)
            }
        }
        
        /// <summary>
        /// СуммаДокумента.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.СуммаДокумента CustomAttributes)
        public virtual int СуммаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get start)
                int result = this.fСуммаДокумента;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Get end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set start)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set start)
                this.fСуммаДокумента = value;
                // *** Start programmer edit section *** (ЗаказПост.СуммаДокумента Set end)

                // *** End programmer edit section *** (ЗаказПост.СуммаДокумента Set end)
            }
        }
        
        /// <summary>
        /// Заказ поставщику.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Yuehkap5.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Get start)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Get start)
                IIS.Yuehkap5.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Get end)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Set start)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (ЗаказПост.Контрагенты Set end)

                // *** End programmer edit section *** (ЗаказПост.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// Заказ поставщику.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Организации CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.Yuehkap5.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Организации Get start)

                // *** End programmer edit section *** (ЗаказПост.Организации Get start)
                IIS.Yuehkap5.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ЗаказПост.Организации Get end)

                // *** End programmer edit section *** (ЗаказПост.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Организации Set start)

                // *** End programmer edit section *** (ЗаказПост.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ЗаказПост.Организации Set end)

                // *** End programmer edit section *** (ЗаказПост.Организации Set end)
            }
        }
        
        /// <summary>
        /// Заказ поставщику.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Склады CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Yuehkap5.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Склады Get start)

                // *** End programmer edit section *** (ЗаказПост.Склады Get start)
                IIS.Yuehkap5.Склады result = this.fСклады;
                // *** Start programmer edit section *** (ЗаказПост.Склады Get end)

                // *** End programmer edit section *** (ЗаказПост.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Склады Set start)

                // *** End programmer edit section *** (ЗаказПост.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (ЗаказПост.Склады Set end)

                // *** End programmer edit section *** (ЗаказПост.Склады Set end)
            }
        }
        
        /// <summary>
        /// Заказ поставщику.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказПост.Заказ CustomAttributes)

        // *** End programmer edit section *** (ЗаказПост.Заказ CustomAttributes)
        public virtual IIS.Yuehkap5.DetailArrayOfТЧЗаказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказПост.Заказ Get start)

                // *** End programmer edit section *** (ЗаказПост.Заказ Get start)
                if ((this.fЗаказ == null))
                {
                    this.fЗаказ = new IIS.Yuehkap5.DetailArrayOfТЧЗаказ(this);
                }
                IIS.Yuehkap5.DetailArrayOfТЧЗаказ result = this.fЗаказ;
                // *** Start programmer edit section *** (ЗаказПост.Заказ Get end)

                // *** End programmer edit section *** (ЗаказПост.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказПост.Заказ Set start)

                // *** End programmer edit section *** (ЗаказПост.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (ЗаказПост.Заказ Set end)

                // *** End programmer edit section *** (ЗаказПост.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказПостE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостE", typeof(IIS.Yuehkap5.ЗаказПост));
                }
            }
            
            /// <summary>
            /// "ЗаказПостL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПостL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПостL", typeof(IIS.Yuehkap5.ЗаказПост));
                }
            }
            
            /// <summary>
            /// "ЗаказПоставщикуE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПоставщикуE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПоставщикуE", typeof(IIS.Yuehkap5.ЗаказПост));
                }
            }
            
            /// <summary>
            /// "ЗаказПоставщикуL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказПоставщикуL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказПоставщикуL", typeof(IIS.Yuehkap5.ЗаказПост));
                }
            }
        }
    }
}
