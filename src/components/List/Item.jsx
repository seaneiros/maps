import React, {Component} from 'react';

import Button from './Button.jsx';

class Item extends Component {

  render() {
    let {item, className, isEditable, showEditButton, showDeleteButton, deleteButtonClassName, editButtonClassName, deleteButtonClick, saveButtonClick, onClick } = this.props;

    let itemClasses = [
      'simple-list__item',
      item.selected ? 'simple-list__item--selected' : '',
      className
    ].join(' ');

    return (
      <div className={itemClasses} 
           onClick={() => { onClick(item); }}>
        {isEditable && showEditButton ? <Button className={`simple-list__button--edit ${editButtonClassName}`} onClick={() => { saveButtonClick(item); }} title="Редактировать элемент"/> : null}
        <div className="simple-list__item__title">{item.title}</div>
        {isEditable && showDeleteButton ? <Button className={`simple-list__button--delete ${deleteButtonClassName}`} onClick={() => { deleteButtonClick(item); }} title="Удалить элемент"/> : null}
      </div>
    );
  }
}

Item.propTypes = {
  item:                  React.PropTypes.object,
  className:             React.PropTypes.string,
  isEditable:            React.PropTypes.bool,
  showEditButton:        React.PropTypes.bool,
  showDeleteButton:      React.PropTypes.bool,
  deleteButtonClassName: React.PropTypes.string,
  editButtonClassName:   React.PropTypes.string,
  deleteButtonClick:     React.PropTypes.func,
  saveButtonClick:       React.PropTypes.func,
  onClick:               React.PropTypes.func
};

Item.defaultProps = {
  item:                  {id:  1, title: '', selected: false},
  className:             '',
  isEditable:            true,
  showEditButton:        true,
  showDeleteButton:      true,
  deleteButtonClassName: '',
  editButtonClassName:   '',
  deleteButtonClick:     () => {},
  saveButtonClick:       () => {},
  onClick:               () => {}
};

export default Item;