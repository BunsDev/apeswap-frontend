import React, { useState } from 'react'
import { useAllHarvest } from 'hooks/useHarvest'
import { AutoRenewIcon, Flex, LinkExternal, Text, useMatchBreakpoints } from '@apeswapfinance/uikit'
import { useToast } from 'state/hooks'
import { getEtherscanLink } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { updateFarmUserEarnings } from 'state/farms'
import { useAppDispatch } from 'state'
import { FarmButton } from '../styles'
import { ActionContainer } from './styles'

interface HarvestActionsProps {
  pids: number[]
  disabled: boolean
}

const HarvestAllAction: React.FC<HarvestActionsProps> = ({ pids, disabled }) => {
  const { account, chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  const [pendingTrx, setPendingTrx] = useState(false)
  const { onReward } = useAllHarvest(pids, chainId)
  const { toastSuccess } = useToast()
  //   const { isXl, isLg } = useMatchBreakpoints()
  //   const isMobile = !isLg && !isXl

  return (
    <ActionContainer>
      <FarmButton
        ml="20px"
        className="noClick"
        disabled={disabled || pendingTrx}
        onClick={async () => {
          setPendingTrx(true)
          await onReward().catch((e) => {
            console.error(e)
            setPendingTrx(false)
          })
          pids.map((pid) => {
            return dispatch(updateFarmUserEarnings(chainId, pid, account))
          })
          setPendingTrx(false)
        }}
        endIcon={pendingTrx && <AutoRenewIcon spin color="currentColor" />}
      >
        HARVEST ALL ({pids.length})
      </FarmButton>
    </ActionContainer>
  )
}

export default React.memo(HarvestAllAction)