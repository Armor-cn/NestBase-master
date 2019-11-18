import {ApiModelProperty} from '@nestjs/swagger'
import {IsInt, Min, Max} from 'class-validator'
import {Type} from 'class-transformer'

/**
 * 分页请求DTO基类
 */
export class PagingReqDto {
	@ApiModelProperty({description: '分页页码'})
	@Type(() => Number)
	@IsInt({message: '页码必须是整数'})
	@Min(0, {message: '页码不得小于0'})
	readonly PageIndex: number

	@ApiModelProperty({description: '分页每页数量'})
	@Type(() => Number)
	@IsInt({message: '每页数量必须是整数'})
	@Min(5, {message: '每页数量不得小于5'})
	@Max(100, {message: '每页数量不得大于100'})
	readonly PageSize: number
}