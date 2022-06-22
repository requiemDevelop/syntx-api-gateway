import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [ '@.env', `@${process.env.NODE_ENV}.env` ]
        }),
        UsersModule,
        AuthModule,
    ],
})
export class ApiGatewayModule {}