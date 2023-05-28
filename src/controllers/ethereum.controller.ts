import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { EthereumService } from "@services";

@ApiTags('Ethereum')
@Controller('/ethereum')
export class EthereumController {
  constructor(
    private readonly ethereumService: EthereumService
  ) { }

  @Post('/create-wallet')
  async createWallet() {
    const response = await this.ethereumService.createWallet();
    return { data: response }
  }
}