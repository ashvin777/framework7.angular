/*===============================================================================
************   Data Table   ************
===============================================================================*/
app.initDataTable = function (table) {
    table = $(table);
    var tableHeader = table.find('.data-table-header');
    var tableHeaderSelected = table.find('.data-table-header-selected');

    // Handle selected
    function checkSelectedHeader() {
        if (tableHeader.length > 0 && tableHeaderSelected.length > 0) {
            var checkedItems = table.find('tbody .checkbox-cell input:checked').length;
            table[checkedItems > 0 ? 'addClass' : 'removeClass']('data-table-has-checked');
            tableHeaderSelected.find('.data-table-selected-count').text(checkedItems);
        }
    }
    function toggleRowSelected (index, el, checked) {
        // Select the row if the checkbox is the first column
        if (index === 0) {
            el[checked ? 'addClass': 'removeClass']('data-table-row-selected');
        }
    }

    table.on('change', '.checkbox-cell input[type="checkbox"]', function (e) {
        if (e.detail && e.detail._sentByF7DataTable) {
            // Scripted event, don't do anything
            return;
        }
        var input = $(this);
        var checked = input[0].checked;
        var headerCell = input.parents('th');
        var columnIndex = input.parents('td,th').index();

        // If header checkbox exists
        if (headerCell.length > 0) {
            toggleRowSelected(columnIndex, table.find('tbody tr'), checked);            
            table.find('tbody tr td:nth-child(' + (columnIndex +1) + ') input').prop('checked', checked).trigger('change', {_sentByF7DataTable: true});
        }
        else {
            toggleRowSelected(columnIndex, input.parents('tr'), checked);

            if (!checked) {
                table.find('thead .checkbox-cell:nth-child(' + (columnIndex +1) + ') input[type="checkbox"]').prop('checked', false);
            }
            else {
                // Check for all checked
                if (table.find('tbody .checkbox-cell:nth-child(' + (columnIndex +1) + ') input[type="checkbox"]:checked').length === table.find('tbody tr').length) {
                    table.find('thead .checkbox-cell:nth-child(' + (columnIndex +1) + ') input[type="checkbox"]').prop('checked', true).trigger('change', {_sentByF7DataTable: true});
                }
            }
        }
        checkSelectedHeader();
    });
    checkSelectedHeader();

    // Sortable
    table.find('thead .sortable-cell').on('click', function () {
        var cell = $(this);
        var isActive = cell.hasClass('sortable-active');
        var currentSort;
        if (isActive) {
            currentSort = cell.hasClass('sortable-desc') ? 'desc' : 'asc';
            cell.removeClass('sortable-desc sortable-asc').addClass('sortable-' + (currentSort === 'desc' ? 'asc' : 'desc'));
        }
        else {
            table.find('thead .sortable-active').removeClass('sortable-active');
            cell.addClass('sortable-active');
        }
    });

    // Collapsible
    if (table.hasClass('data-table-collapsible')) {
        table.find('tbody td:not(.checkbox-cell)').each(function () {
            var index = $(this).index();
            var collpsibleTitle = $(this).attr('data-collapsible-title');
            if (!collpsibleTitle && collpsibleTitle !== '') {
                $(this).attr('data-collapsible-title', table.find('thead th').eq(index).text());
            }
        });
    }
};
app.initPageDataTables = function (pageContainer) {
    pageContainer = $(pageContainer);
    var dataTables = pageContainer.find('.data-table-init');
    if (dataTables.length === 0 && pageContainer.hasClass('data-table-init')) {
        dataTables = pageContainer;
    }
    dataTables.each(function () {
        app.initDataTable(this);
    });
};
