const FORM_DEFS = {
  /**
   * REMEASURE FORM
   */
  remeasure: {
    table: 'measure',
    header: 'Remeasure form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "TreeID",
                label: "TreeID",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                readonly: false,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                readonly: false,
                default_option: 'Please select a species...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'prev_status',
                column_name: 'status',
                label: "Previous status",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'status',
                label: "Current Status",
                html_element: 'select',
                readonly: true,
                default_option: '3',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'comments',
                label: "Previous comments",
                disabled: true,
                html_element: "textarea",
                html_attributes: { rows: 3 },
                data_attributes: { prev_action: 'replace' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Remeasurement data',
        sections: [
          {
            inputs: [
              {
                id: 'height_r',
                column_name: 'height',
                label: 'Height (mm)',
                html_element: 'input',
                html_attributes: { type: 'number', step: '0.1' },
                data_attributes: { prev_action: 'prepend' },
              },

            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        collapsed: false,
        sections: [
          {
            inputs: [
              {
                id: 'northing_r',
                column_name: 'northing',
                label: 'Northing (cm)',
                html_element: 'input',
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,
                 },
                data_attributes: { prev_action: 'replace' },
              },
              {
                              id: 'easting_r',
                              column_name: 'easting',
                              label: 'Easting (cm)',
                              html_element: 'input',
                              html_attributes: { type: 'number',
                               step: 1,
                               min: 0,
                               max: 100,
                               },
              data_attributes: { prev_action: 'replace' },
              },
              {
                               column_name: "cell",
                               label: "Cell",
                               html_element: "input",
                               readonly: false,
                               html_attributes: { type: 'string' },
                               data_attributes: { prev_action: 'replace' },
                            },
            ],// inputs
          },
        ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
          {
            inputs: [
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * INGROWTH FORM
   */
  ingrowth: {
    table: 'measure',
    header: 'Ingrowth form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
               {
                column_name: 'status',
                label: "Initial Status",
                html_element: 'select',
                readonly: true,
                default_option: '3 - New',
                data_attributes: {
                options_list: 'StatusList',
                              },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                data_attributes: { prev_action: 'replace' },
              },
              {
                // Tag check
                modal: true,
                modal_id: 'tag_check_i',
                label_id: 'tag_Label_i',
                title: 'Tag Check',
                text: 'Tree already recorded.',
                buttons: [
                  {
                    id: 'ok_tag_i',
                    text: 'Ok',
                    context_class: 'primary',
                  },
                ],
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'species_i',
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'height_i',
                column_name: 'height',
                label: 'Height (mm)',
                html_element: 'input',
                html_attributes: { type: 'number', step: '0.1' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        sections: [
          {
            inputs: [
              {
                id: 'northing_i',
                column_name: 'northing',
                label: 'Northing (cm)',
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
               {
                              id: 'easting_i',
                              column_name: 'easting',
                              label: 'Easting (cm)',
                              html_element: 'input',
                              html_attributes: { type: 'number' },
               },
               {
                                column_name: "cell",
                                label: "Cell",
                                html_element: "input",
                                readonly: false,
                                html_attributes: { type: 'string' },

                             },
            ],// inputs
         },
       ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
              {
              inputs: [
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * STAND DOC FORM
   */
  stand_doc: {
    table: "stand_doc",
    header: "Stand Documentation Form",
    cards: [
      {
        id: "stand_info",
        header: "Stand Info.",
        collapsable: false,
        collapsed: null,
        sections: [
          {
            inputs: [
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
              },
              {
                column_name: "date",
                label: "Date (MMDDYYYY)",
                html_element: "input",
                html_attributes: { type: 'string' },
              },
              {
                column_name: "da_tag",
                label: "Dominant adult tag",
                html_element: "input",
                html_attributes: { type: 'string' },
              },
              {
                column_name: "da_species",
                label: "Dominant adult species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                options_list: 'SpeciesList', },
              },
              {
                column_name: "da_dbh",
                label: "Dominant adult DBH (cm)",
                html_element: "input",
                html_attributes: { type: 'number', step: '0.1' },
              },
              {
                column_name: "empty_cells",
                label: "Empty cells",
                html_element: "input",
                html_attributes: { type: 'number',
                                               step: 1,
                                               min: 0,
                                               max: 100,
                                               },


              },
              {
              column_name: "percent_cover",
                  label: "Plant cover (%)",
                 html_element: "input",
                  html_attributes: { type: 'number', step: '0.1' },
              },
              {
              column_name: "percent_moss",
                                 label: "Moss cover (%)",
                                html_element: "input",
                                 html_attributes: { type: 'number', step: '0.1' },
               },
               {
               column_name: "densiometer",
                 label: "Densiometer Reading (% Canopy Cover)",
                 html_element: "input",
                 html_attributes: { type: 'number', step: '1' },
              },
              {
              column_name: "personnel",
              label: "Personnel (initials)",
              html_element: "input",
              html_attributes: { type: 'string' },
                            },
                            {
              column_name: "notes",
                            label: "Notes",
                            html_element: "input",
                                          html_attributes: { type: 'string' },
                                          },


            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },


  /**
   * Herb FORM
   */


  /**
   * HERB FORM
   */
  herbs: {
    table: 'herbs',
    header: 'Herb form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "herb_species",
                label: "Herb Species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                options_list: 'HerbSpeciesList', },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'cover',
                column_name: 'cover',
                label: "Cover (cells)",
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
              {
                id: 'stemcount',
                column_name: 'stemcount',
                label: 'Stem Count',
                html_element: 'input',
                html_attributes: { type: 'number'},
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        sections: [
          {
            inputs: [

               {
                                column_name: "avgcell",
                                label: "Average Cell",
                                html_element: "input",
                                readonly: false,
                                html_attributes: { type: 'string' },

                             },
            ],// inputs
         },
       ],// sections
      },
      {
        id: 'comments',
        header: 'Comments',
        sections: [
              {
              inputs: [
              {
                column_name: 'comment_custom',
                label: 'Custom comment',
                html_element: 'textarea',
                html_attributes: { rows: 3 },
              },
            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

};

Object.freeze(FORM_DEFS);

const FormTemplates = {
  modal: function (modal_obj) {
    let mdl = $(`
      <div class="modal fade" id="${modal_obj.modal_id}" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="${modal_obj.label_id}" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modal_obj.label_id}">${modal_obj.title}</h5>
            </div>
            <div class="modal-body">
              <p>${modal_obj.text}</p>
            </div>
          </div>
        </div>
      </div>
    `);

    let body = mdl.find('.modal-body');
    for (let i = 0; i < modal_obj.buttons.length; i++)
    {
      let btn = modal_obj.buttons[i]
      body.append(`<button type="button" id="${btn.id}" class="btn btn-${btn.context_class}">${btn.text}</button>`)
    }

    return mdl;
  },
}

