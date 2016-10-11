import React, {Component} from 'react';

import Item from './Item.jsx';
import Button from './Button.jsx';

class List extends Component {
  
  render() {

    let {
      elements,
      emptyText,
      isEditable,
      listClassName,
      itemClassName,
      showAddButton,
      showEditButton,
      showDeleteButton,
      showClearButton,
      addButtonClassName,
      deleteButtonClassName,
      editButtonClassName,
      clearButtonClassName,
      addButtonClick,
      deleteButtonClick,
      saveButtonClick,
      clearButtonClick,
      itemClick
    } = this.props;

    let listClasses = [
      'simple-list',
      isEditable ? 'simple-list--editable' : '',
      listClassName
    ].join(' ');

    let items = elements.map((i) => {
      return <Item key={i.id}
                   item={i}
                   className={itemClassName} 
                   onClick={itemClick}
                   isEditable={isEditable}
                   showEditButton={showEditButton}
                   showDeleteButton={showDeleteButton}
                   editButtonClassName={editButtonClassName}
                   deleteButtonClassName={deleteButtonClassName}
                   saveButtonClick={saveButtonClick}
                   deleteButtonClick={deleteButtonClick}/>;
    });

    return (
      <div className={listClasses}>
        {showAddButton && isEditable ? <Button className={`simple-list__button--add ${addButtonClassName}`} onClick={addButtonClick} title="Добавить элемент"/> : null}
        <div className="simple-list__content">
          {items.length ? items : emptyText}
        </div>
        {showClearButton && isEditable ? <Button className={`simple-list__button--clear ${clearButtonClassName}`} onClick={clearButtonClick} title="Очистить список"/> : null}
      </div>
    );
  }
}

List.propTypes = {
  elements:              React.PropTypes.array,
  emptyText:             React.PropTypes.string,
  isEditable:            React.PropTypes.bool,
  listClassName:         React.PropTypes.string,
  itemClassName:         React.PropTypes.string,
  showAddButton:         React.PropTypes.bool,
  showEditButton:        React.PropTypes.bool,
  showDeleteButton:      React.PropTypes.bool,
  showClearButton:       React.PropTypes.bool,
  addButtonClassName:    React.PropTypes.string,
  deleteButtonClassName: React.PropTypes.string,
  editButtonClassName:   React.PropTypes.string,
  clearButtonClassName:  React.PropTypes.string,
  addButtonClick:        React.PropTypes.func,
  deleteButtonClick:     React.PropTypes.func,
  saveButtonClick:       React.PropTypes.func,
  clearButtonClick:      React.PropTypes.func,
  itemClick:             React.PropTypes.func
};

List.defaultProps = {
  elements:              [],
  emptyText:             'В списке нет элементов.',
  isEditable:            true,
  listClassName:         '',
  itemClassName:         '',
  showAddButton:         true,
  showEditButton:        true,
  showDeleteButton:      true,
  showClearButton:       true,
  addButtonClassName:    '',
  deleteButtonClassName: '',
  editButtonClassName:   '',
  clearButtonClassName:  '',
  addButtonClick:        () => {},
  deleteButtonClick:     () => {},
  saveButtonClick:       () => {},
  clearButtonClick:      () => {},
  itemClick:             () => {}
};

export default List;