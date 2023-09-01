/**
 * @description 设置并开启定时器
 * @param { string } customTimerName 自定义定时器名称
 * @param { Function } timerCallback 设置定时器的回调函数
 * @param { number } executionTime 定时器的执行时间
 */
export declare function setTimedTask(customTimerName: string, timerCallback: () => void, executionTime: number): void;
/**
 * @description 重启定时器
 * @param { string } customTimerName 已被管理的定时器名称
 * @param { number } executionTime 定时器的执行时间
 */
export declare function restartTimedTask(customTimerName: string, executionTime: number): void;
/**
 * @description 清除定时器
 * @param { string } customTimerName 已被管理的定时器名称
 */
export declare function clearTimedTask(customTimerName: string): void;
