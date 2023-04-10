import { IsUrl, Matches } from 'class-validator';
import { NotContainsAfusUrl } from './validation';

export class CreateShortDto {
  @IsUrl(
    {
      require_protocol: true,
      require_tld: process.env.NODE_ENV !== 'development',
    },
    { message: 'Invalid URL.' },
  )
  @Matches(/^https?/)
  @NotContainsAfusUrl({
    message: 'URL is already shortened.',
  })
  url: string;
}
