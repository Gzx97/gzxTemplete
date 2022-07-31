/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

import './index.less';

const _COUNTDOWN_ = 60;
const _LABEL_ = '获取验证码';

interface IProps {
  onClick: () => void;
  checkValue: () => boolean;
  text?: string;
  className?: string;
}
interface IState {
  countDown: number;
}

class Captcha extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      countDown: _COUNTDOWN_,
    };
  }
  timer: any = null;
  handleClick = () => {
    if (this.state.countDown < _COUNTDOWN_) {
      return;
    }
    const { checkValue, onClick } = this.props;
    if (!checkValue()) {
      return;
    }
    clearInterval(this.timer);
    this.timer = null;
    onClick && onClick();
    this.timer = setInterval(() => {
      const t = this.state.countDown - 1;
      if (t < 0) {
        clearInterval(this.timer);
        this.timer = null;
        this.setState({ countDown: _COUNTDOWN_ });
        return;
      }
      this.setState({ countDown: t });
    }, 1000);
  };
  render() {
    const { className } = this.props;
    const { countDown } = this.state;
    return (
      <div className={`captcha ${className}`} onClick={this.handleClick}>
        {countDown < _COUNTDOWN_ ? `${countDown}秒` : _LABEL_}
      </div>
    );
  }
}

export default Captcha;
