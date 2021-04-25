/*
 * @Author: your name
 * @Date: 2021-04-25 15:28:34
 * @LastEditTime: 2021-04-25 15:29:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\part1\src\components\Notification.js
 */

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  export default Notification