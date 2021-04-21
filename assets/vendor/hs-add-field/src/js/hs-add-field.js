/*
* HSCounter Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSAddField
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSAddField {
    constructor(element, config) {
        this.element = element;
        this.defaults = {
            createTrigger: '.js-create-field',
            deleteTrigger: '.js-delete-field',
            limit: 5,
            defaultCreated: 1,
            nameSeparator: '_',

            addedField: () => {
            },
            deletedField: () => {
            }
        };
        this.config = config;

        this.flags = {
            name: 'data-name',
            delete: 'data-hs-add-field-delete'
        };
        this.fieldsCount = 0;
    }

    init() {
        const self = this,
            element = this.element,
            dataSettings = $(element).attr('data-hs-add-field-options') ? JSON.parse($(element).attr('data-hs-add-field-options')) : {};

        this.config = Object.assign({}, this.defaults, this.config, dataSettings);
        this.fieldsCount = this.config.defaultCreated;

        for (var i = 0; i < this.config.defaultCreated; i++) {
            this.__addField(this.config)
        }

        $(this.element).on('click', this.config.createTrigger, () => {
            this.__addField(this.config)
        })

        $(this.element).on('click', this.config.deleteTrigger, (e) => {
            this.__deleteField(this.config, $(e.currentTarget).attr(this.flags.delete))
        })
    }

    __addField(params) {
        var settings = params;

        if (this.fieldsCount < settings.limit) {
            let field = $(settings.template).clone().removeAttr('id').css({display: ''}).appendTo($(settings.container))

            this.__updateFieldsCount();
            this.__renderName();
            this.__renderKeys();
            this.__toggleCreateButton();

            this.config.addedField();
        }
    }

    __deleteField(params, index) {
        var settings = params;

        if (this.fieldsCount > 0) {
            $(settings.container).children()[index].remove()

            this.__updateFieldsCount();
            this.__renderName();
            this.__renderKeys();
            this.__toggleCreateButton();

            this.config.deletedField();
        }
    }

    __renderName() {
        $(this.config.container).children().each((i, el) => {
            let key = i;

            $(el).find(`[${this.flags.name}]`).each((i, el) => {
                let name = $(el).attr(this.flags.name);

                $(el).attr('name', name + this.config.nameSeparator + key)
            })
        })
    }

    __renderKeys() {
        $(this.config.container).children().find(this.config.deleteTrigger).each((i, el) => {
            $(el).attr(this.flags.delete, i)
        })
    }

    __updateFieldsCount() {
        this.fieldsCount = $(this.config.container).children().length
    }

    __toggleCreateButton() {
        if (this.fieldsCount === this.config.limit) {
            $(this.config.createTrigger).fadeOut(0);
        } else {
            $(this.config.createTrigger).fadeIn(0);
        }
    }
}
