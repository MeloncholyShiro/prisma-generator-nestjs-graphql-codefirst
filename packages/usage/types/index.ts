import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';

export enum Grands {
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER',
  MODERATOR = 'MODERATOR',
}

export enum NotificationType {
  newPosts = 'newPosts',
  newComments = 'newComments',
  newFollowers = 'newFollowers',
  reply = 'reply',
  heartOnPost = 'heartOnPost',
  heartOnComment = 'heartOnComment',
  heartOnReply = 'heartOnReply',
}

export enum Language {
  Typescript = 'Typescript',
  Javascript = 'Javascript',
  Rust = 'Rust',
  Go = 'Go',
  Python = 'Python',
  Cpp = 'Cpp',
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => Grands, { defaultValue: Grands.USER })
  grant: keyof typeof Grands;

  @Field(() => Date)
  createdAt: Date;

  @HideField()
  updatedAt: Date;

  @Field(() => Profile, { nullable: true })
  Profile?: Profile | null;
}

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user?: User;

  @Field(() => String)
  userId: string;

  @Field(() => String, { nullable: true })
  username: string | null;

  @Field(() => String, { nullable: true })
  firstName: string | null;

  @Field(() => String, { nullable: true })
  middleName: string | null;

  @Field(() => String, { nullable: true })
  lastName: string | null;
}
