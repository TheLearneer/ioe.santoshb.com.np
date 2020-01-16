## Functions of Physical Layer
- Representation of bits: In 0 or 1, represent the type of encoding method
- Data rate: Numbers of bits per second
- Synchronization: How transmitter and receiver are synchronized
- Interface: Between the device and medium
- Line configuration: Connects device with the medium, point to point or multipoint configuration
- Topology: How the devices are connected to form the network. E.g. Ring, Star, Mesh, Bus
  <b-img src="https://systemzone.net/wp-content/uploads/2017/09/network-topology.png" alt="network topologies" align="center" />

## Network Monitoring
1. **Delay**  
   Delay of network specifies how long does it take for a bit of data to travel across a network from one node to another. It is measured in multiples or fractions of second.
2. **Latency**  
   It is an amount of time it takes for a packet to traverse a system. In some cases latency is mesured by sending a packet that is returned to the sender, the RTT (Round Trip Time) is latency.
3. **Throughput**  
   It is the amount of data moved successfully from one point to another point in a given time period. It is measured in bits per second.

## Transmission Media
They are the medium that can carry the information from source to destination. They are actually located below the physical layer and are directly controlled by physical layer.

**Categories:**
- Guided / Bounded / Wired
   E.g. Twisted pair, coaxial cable
- Unguided / Unbounded / Wireless
   E.g. Free Space

### Guided Transmission Media
They use cabling system that guides the data signal along a specific part. They provide a physical path way for transmission of data from source to destination. Twisted pair and coaxial cable use metallic (copper) conductor that accepts and transport signal in the form of electric current. Optical fibre transport the signal in the form of light.

---
1. **Twisted Pair Cable**  
   It is the type of wiring which consists of two insulated copper wire twisted together for the purpose of cancelling out electromagnetic interference (EMI) from external sources, for instances electromagnetic radiation from unshielding twisted pair (UTP Cables) and croos talk between neighbouring pairs.

   <b-img src="http://www.nikomax-global.com/media/attachments/cfiles/pages/publication_46/1973_1.jpg" width=600 alt="twisted pair cable" />

   The twisting tends to decrease the crosstalk and interference between adjacent pairs in a cable.
   - UTP  
      It is a most common type of telecommunication when compared to STP which consists of two conductor usually copper, each with its own color plastic insulator. It has no any shielding.
   - STP  
      It has a metal foil or braided mesh covering which encases each pair of insulated conductor. Although metal casing improves the quality of cable by precenting the penetration of noise or crosstalk. It is bulkier and more expensive

   <b-img src="http://www.chinacablesbuy.com/wp-content/uploads/2015/05/unshielded-Twisted-pair-cable-and-shielded-twisted-pair-cable.jpg" alt="UTP vs STP twisted pair" class="pt-4 pb-4" />

---
2. **Coaxial Cable**  
   It consists of two conductors that are parallel to each other. Copper is used as central conductor that can be a solid wire or a standard one. It is surrounded by PVC insulation, a sheath that is encased in an outer conductor of metal foil, braid or both. The outer conductor is also encased in an insulating sheath. Outermost part is a plastic cover which protects the whole cable.
   
   <b-img src="http://ecomputernotes.com/images/Coaxial-Cable.jpg" alt="Coaxial cable" class="pb-4 pt-4" />
   
   **Types:**
   - Thicknet
   - Thinnet
   
   ---
   ##### Advantages
      - Bandwidth is high
	  - Used in long distance telephone line
	  - Much higher noise immunity
	  - Data transmission without distortion
	  - Have better shielding than twisted pair
   
   ##### Disadvantages
      - Single cable failure can fail entire network
	  - Difficult to install and expensive than twister pair
	  
   ##### Application
      - Telephone network
	  - Cable TV
	  - Long distance transmission
	  - Traditional ethernet LAN

---
3. **Fiber Optics Cable**
   It is a thin flexible medium made up of plastic or glass and is capable of transmitting signal in the form of light. It is designed to pass specific type of light waves over long distance with very less attenuation (loss of signal over long distance)
   
   <b-img src="https://www.researchgate.net/profile/Oussama_Messai/publication/332183333/figure/fig11/AS:743735042252806@1554331660896/Fiber-Optic-cable-components.jpg" alt="Fiber optics cable" class="pb-4 pt-4" />
   
   It has a cylindrical shape and consists of 3 concentric centres
   - Core
   - Cladding
   - Jacket
   
   Core is innermost section made up of glass of plastic and consists of 1 or more very thin fibre. Each fibre has its own cladding, a glass or plastic that has lower refractive index than core to keep all the light in the core. Outermost part is jacket that protects against moisture or all other environmental dangers. It uses total internal reflection to guide a light through the channel.
   
   ---
   ##### Propagation modes
      - Multi mode
	  - Single mode
	  
   ##### Advantages
      - Higher bandwidth
	  - Less attenuation
	  - Immunity to EMI
	  - Resistance to corossive materials
	  - Smaller size and light weight
	  - Higher life span

   ##### Disadvantages
      - Difficult installation and management
	  - Expensive
---

### Unguided Transmission Media
It transports EMW without using any physical conductor or media. Signals are normally boardcasted through the air and thus are available to anyone that has a device capable of receiving them. When electrons move they create EMW that can propagate through space (or even in vaccum). When an antenna of appropiate size is attached to electrical circuit, the EMW can be boardcast and received by a receiver. This is main principle for wireless communication.

## Satellite
A satellite is a small heavenly body that resolves around a planet either for collecting useful information or transfer of information. They can be used for variety of purpose such as military, communication, weather forecase, research etc.

Based on the altitude of orbits, satellites are classified as:

---
1. **LEO (Low Earth Orbit)** - *below 5000 KM*  
   ##### Advantages
   - Delay of packet is relatively lower
   - Antenna can have low transmission power
   ##### Disadvantages
   - If global average is required, it requires atleast 50-200 satellites in it's orbit
   - Short life span

---
2. **MEO (Medium Earth Orbit)** - *5000-15000 KM*  
   ##### Advantages
   - Compared to LEO, MEO requires only a dozen satellite
   - Simple in design
   ##### Disadvantages
   - Satellites require higher transmission power
   - Special antennas are required

---
3. **GEO (Geostationary Earth Orbit)** - *35800 KM*  
   ##### Advantages
   - It is possible to cover almost all parts of earth with just 3 GEO satellites
   - Lifetime of GEO is high; around 15 years
   ##### Disadvantages
   - Larger antennas are required for northern & southern region of earth
   - High transmission power is required
   - Fixing at GEO is very expensive

## Line of Sight (LOS)
It is a type of propagation that can transmit and receive data only where receiving and transmitting stations are in view of each other without any sort of obstacle between them. E.g. Satellite transmission, FM etc.

Here very high frequency signals are transmitted in straight line directly from antenna to antenna. Antenna must be bidirectional facing each other either tall enough or close enough together not to be affected by the curvature of earth. Long distance communication is more effective through wireless network but geographical obstacles and curvature of earth brings limitation to line of sight propagation.

<b-img src="http://3.bp.blogspot.com/-n8p8sQ16JJE/UE8oXvlUhPI/AAAAAAAAAEA/Q4ArO8RnuG4/s400/LOS.png" alt="Line of sight propagation" />