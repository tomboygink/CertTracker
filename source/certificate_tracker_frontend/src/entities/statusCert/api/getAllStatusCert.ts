import { ECommand } from '@/src/shared'
import config from '../../../../../config/config.json'

export const getAllStatusCert = async () => {
    const response = await fetch(`${config?.server_config.protocol}${config?.server_config.host}:${config?.server_config.port}/api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'cmd': `${ECommand.allStatusCert}`,
            'args': {}
        })
    })

    return response.json()
}